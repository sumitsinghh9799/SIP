function createbankaccount(ib){
    let b=ib;


        function deposit(a){
            b+=a;
            console.log(b);

        }

        function withdraw(a){
            b-=a;
            console.log(b);

        }

        function checkbalance(){
            console.log(b);

        }
        return{deposit, withdraw, checkbalance};

}

const acc=createbankaccount(2000);

acc.deposit(500);
acc.withdraw(200);
acc.checkbalance();


// bank example
function outer(){

    let count=0;

    function inner(){

            count ++;
            console.log(count);


        }

        return inner;

    }

    const counter=outer();
    counter();
    counter();
    counter();
    counter();