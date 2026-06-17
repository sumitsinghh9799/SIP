#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

class Solution {
public:
    bool escapeGhosts(vector<vector<int>>& ghosts, vector<int>& target) {

        int xapna = target[0];
        int yapna = target[1];

        // Distance from (0,0) to target
        int dist = abs(xapna) + abs(yapna);

        // Check each ghost
        for (auto i : ghosts) {
            int d = abs(xapna - i[0]) + abs(yapna - i[1]);

            if (d <= dist) {
                return false;
            }
        }

        return true;
    }
};

int main() {
    Solution obj;

    vector<vector<int>> ghosts = {{1, 0}, {0, 3}};
    vector<int> target = {0, 1};

    if (obj.escapeGhosts(ghosts, target))
        cout << "true";
    else
        cout << "false";

    return 0;
}