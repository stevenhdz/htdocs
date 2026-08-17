import 'package:auth2_crud/Home.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutterfire_ui/auth.dart';

class AuthGate extends StatelessWidget {
  const AuthGate({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<User?>(
      stream: FirebaseAuth.instance.authStateChanges(),
      // If the user is already signed-in, use it as initial data
      initialData: FirebaseAuth.instance.currentUser,
      builder: (context, snapshot) {
        // User is not signed in
        if (!snapshot.hasData) {
          return const SignInScreen(providerConfigs: [
            EmailProviderConfiguration(),
            GoogleProviderConfiguration(
              clientId:
                  '303620912037-j4h3843mjb4o148h15t2i16iel57tl77.apps.googleusercontent.com',
            ),
          ]);
        }

        // Render your application if authenticated
        return Home(user: snapshot.data!);
      },
    );
  }
}
