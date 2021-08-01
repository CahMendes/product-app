import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { VStack, HStack, Button, IconButton, Icon, Text, Center, StatusBar } from "native-base";
import { MaterialIcons, Fontisto, AntDesign } from '@expo/vector-icons';

function AppBar() {
  return (
    <>
      <StatusBar backgroundColor="#c20011" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="#e60014" />

      <HStack bg='#e60014' px={1} py={3} justifyContent='space-between' alignItems='center'>
        <HStack space={4} alignItems='center'>
          <IconButton icon={<Icon size="sm" as={<AntDesign name='arrowleft' />} color="white" />} />
        </HStack>
        <HStack space={2}>
          <IconButton icon={<Icon as={<MaterialIcons name='favorite-border' />} size='sm' color="white" />} />
          <IconButton icon={<Icon as={<MaterialIcons name='share' />}
            color="white" size='sm' />} />
          <IconButton icon={<Icon as={<Fontisto name='shopping-basket' />} size='sm' color="white" />} />
        </HStack>
      </HStack>
    </>
    )
  }

export default function App() {
  return (
        <NativeBaseProvider>
          <AppBar/>
        </NativeBaseProvider>
  );
  }

const styles = StyleSheet.create({
          container: {
          flex: 1,
    backgroundColor: '#e60014',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
