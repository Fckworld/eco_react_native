import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Details = () => {
  const [messages, setMessages] = useState([]);

  // Función para manejar los mensajes enviados por el usuario
  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1, // ID del usuario
        }}
      />


      {/* Componente TextInput para que el usuario ingrese mensajes */}
      <TextInput
        placeholder="Escribe tu mensaje..."
        style={styles.textInput}
        onSubmitEditing={(event) => {
          const text = event.nativeEvent.text;
          onSend([
            {
              _id: messages.length + 1,
              text,
              createdAt: new Date(),
              user: {
                _id: 1, // ID del usuario
              },
            },
          ]);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
  },
});

export default Details;
