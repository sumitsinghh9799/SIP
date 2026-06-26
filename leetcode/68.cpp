#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> cur;
        vector<string> res;
        int nol = 0;

        for (string word : words) {
            if (word.size() + cur.size() + nol > maxWidth) {

                for (int i = 0; i < maxWidth - nol; i++) {
                    cur[i % (cur.size() - 1 ? cur.size() - 1 : 1)] += ' ';
                }

                res.push_back("");

                for (string s : cur) {
                    res.back() += s;
                }

                cur.clear();
                nol = 0;
            }

            cur.push_back(word);
            nol += word.size();
        }

        // Last line (left justified)
        string ll = "";

        for (string s : cur)
            ll += s + " ";

        ll = ll.substr(0, ll.size() - 1);

        while (ll.size() < maxWidth)
            ll += ' ';

        res.push_back(ll);

        return res;
    }
};

int main() {

    Solution obj;

    vector<string> words = {
        "This", "is", "an", "example", "of", "text", "justification."
    };

    int maxWidth = 16;

    vector<string> ans = obj.fullJustify(words, maxWidth);

    cout << "Output:\n\n";

    for (string s : ans) {
        cout << "\"" << s << "\"" << endl;
    }

    return 0;
}