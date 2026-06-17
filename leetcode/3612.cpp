class Solution {
public:
    bool reachingPoints(int a, int b, int c, int d) {

            while(d>=b and c>=a){
                if(a==c){
                    return (d-b)%c==0;

                }
                if(b==d){

                    return (c-a)%d==0;

                
                }
                if (d>c){
                    d=d%c;

                }
                else{
                    c=c%d;

                }
            }
            return false;

        
    }
};