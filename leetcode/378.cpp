#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int f(vector<vector<int>>& matrix, int m) {
        int n = matrix.size();
        int r = n - 1;
        int c = 0;
        int count = 0;

        while (r >= 0 && c < n) {
            if (matrix[r][c] <= m) {
                count += r + 1;
                c++;
            } else {
                r--;
            }
        }
        return count;
    }

    int kthSmallest(vector<vector<int>>& matrix, int k) {
        int n = matrix.size();
        int l = matrix[0][0];
        int h = matrix[n - 1][n - 1];

        while (l < h) {
            int m = l + (h - l) / 2;

            if (f(matrix, m) < k)
                l = m + 1;
            else
                h = m;
        }

        return l;
    }
};

int main() {
    int n;

    cout << "Enter size of matrix (n): ";
    cin >> n;

    vector<vector<int>> matrix(n, vector<int>(n));

    cout << "Enter the sorted matrix:\n";
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }

    int k;
    cout << "Enter k: ";
    cin >> k;

    Solution obj;
    cout << "Kth Smallest Element = " << obj.kthSmallest(matrix, k) << endl;

    return 0;
}