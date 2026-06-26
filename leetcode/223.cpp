#include <iostream>
#include <algorithm>
using namespace std;

class Solution {
public:
    int computeArea(int ax1, int ay1, int ax2, int ay2,
                    int bx1, int by1, int bx2, int by2) {

        // Area of first rectangle
        int area1 = (ax2 - ax1) * (ay2 - ay1);

        // Area of second rectangle
        int area2 = (bx2 - bx1) * (by2 - by1);

        // Overlapping width
        int overlapWidth = min(ax2, bx2) - max(ax1, bx1);

        // Overlapping height
        int overlapHeight = min(ay2, by2) - max(ay1, by1);

        // Overlapping area
        int overlapArea = 0;

        if (overlapWidth > 0 && overlapHeight > 0) {
            overlapArea = overlapWidth * overlapHeight;
        }

        // Total area
        return area1 + area2 - overlapArea;
    }
};

int main() {
    Solution obj;

    // Example Test Case
    int ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4;
    int bx1 = 0, by1 = -1, bx2 = 9, by2 = 2;

    int ans = obj.computeArea(ax1, ay1, ax2, ay2,
                              bx1, by1, bx2, by2);

    cout << "Total Covered Area = " << ans << endl;

    return 0;
}