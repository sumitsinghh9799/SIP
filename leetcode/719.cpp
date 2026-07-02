class Solution {
public:
    int smallestDistancePair(vector<int>& nums, int k) {
        sort (nums.begin(), nums.end());
    int mind=0;
    int maxd=nums.back()-nums.front();
    while(mind<maxd){
        int m=mind+(maxd-mind)/2;
        if(countpair(nums,m)<k){
            mind=m+1;

        }
        else{
            maxd=m;

        }
    }
    return mind;
        
    }
    int countpair(vector<int>& nums,int t){
        int count=0,l=0;
        for(int r=1;r<nums.size();++r){
            while(nums[r]-nums[l]>t)++l;
            count+=r-l;
        }
        return count;
    }
    int main()
    {
    return 0;

    }
};