#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string getHint(string secret, string guess) {
        int f[10] = {0};

        // Store frequency of digits in secret
        for (int i = 0; i < secret.size(); i++) {
            f[secret[i] - '0']++;
        }

        int cow = 0;
        int bull = 0;

        // Count common digits (bulls + cows)
        for (int i = 0; i < guess.size(); i++) {
            if (f[guess[i] - '0'] > 0) {
                cow++;
                f[guess[i] - '0']--;
            }
        }

        // Count bulls and remove them from cows
        for (int i = 0; i < secret.size(); i++) {
            if (secret[i] == guess[i]) {
                bull++;
                cow--;
            }
        }

        return to_string(bull) + "A" + to_string(cow) + "B";
    }
};

int main() {
    Solution obj;

    string secret, guess;

    cout << "Enter secret: ";
    cin >> secret;

    cout << "Enter guess: ";
    cin >> guess;

    cout << "Answer: " << obj.getHint(secret, guess) << endl;

    return 0;
}