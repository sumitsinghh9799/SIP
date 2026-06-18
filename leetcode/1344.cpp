#include <iostream>
#include <cmath>
using namespace std;

class Solution {
public:
    double angleClock(int hour, int minutes) {

        // Minute hand का angle
        double mh = 6.0 * minutes;

        // Hour hand का angle
        double hh = 30.0 * hour + 0.5 * minutes;

        // दोनों के angle का difference
        double ans = abs(hh - mh);

        // छोटा angle return करो
        return min(ans, 360.0 - ans);
    }
};

int main() {

    int hour, minutes;

    cout << "Enter Hour: ";
    cin >> hour;

    cout << "Enter Minutes: ";
    cin >> minutes;

    Solution obj;

    cout << "Angle = " << obj.angleClock(hour, minutes);

    return 0;
}