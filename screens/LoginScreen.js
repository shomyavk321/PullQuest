// screens/LoginScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  const handleGitHubLogin = () => {
    console.log("GitHub login button pressed");
    // GitHub login logic will go here later
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PullQuest</Text>
      <Text style={styles.subtitle}>Explore. Contribute. Level Up.</Text>

      <Image
        source={{ uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' }}
        style={styles.logo}
      />

      <TouchableOpacity style={styles.button} onPress={handleGitHubLogin}>
        <Text style={styles.buttonText}>Continue with GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#f0f6fc',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#8b949e',
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#238636',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
