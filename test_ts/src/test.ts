export const test = () =>{
    console.log('testです');
    const name:string = 'Mike'; //string
    const age:number = 25; //number
    const isStudent:boolean = false; //boolean
    const hobbies:string[] = ["Reading", "Coding", "Running"] //array
    const num:number[] = [1,2,3,4,5] //number array
    const bool:boolean[] = [true,false,true]
    const address:object = {
        street:"123 Main St",
        city:"Los Angeles",
        state:"CA"
    }; //object
    const today:Date = new Date(); //date
    const none:null = null; //null
    const notDefined:undefined = undefined; //undefined
    const random: any = "Hello World"; //any
    const gender: "male" | "female" = "male"; // union
    const value : string | number[] = [1,2,3];

    console.log(name);
    console.log(age);
    console.log(isStudent);
    console.log(hobbies);
    console.log(num);
    console.log(bool);
console.log(address);
    console.log(today);
    console.log(none);
    console.log(notDefined);
    console.log(random)
    console.log(gender);
    console.log(value);
    

    // 問題：引数に文字列の配列を受け取り、その中身の順番を逆にして返す関数
    // 例：reverseArray(["a","b","c"]) => ["c","b","a"]
    // オプション引数 hasTomは?とすることで引数として入れても入れなくてもいいよー
    const reverseArray = (arr: string[], hasTom?:boolean): string[] => {
        const reversedArray: string[] = []; // 完成した配列を入れるからの配列
        let index: number = arr.length - 1; // 最終要素の要素番号
        while(index >= 0) {
            reversedArray.push(arr[index]);
            index--;
        }

        if (hasTom){
            reversedArray.push("Tom");
        }

        return reversedArray
    }
    console.log(reverseArray(["a","b","c"],false));

    // 簡単ver
    const rev = (arr: number[]): number[] => {
        return arr.reverse();
    }
    console.log(rev([1,2,3,4,5]));

    // オブジェクトの定義
    interface UserProps{
        userId: number,
        name: string,
        age: number,
        email: string,
        isActive: boolean
    }

    const user = {
        userId: 1,
        name: "Mike",
        age: 25,
        email: "mike@gmail.com",
        isActive: true
    }

    const createAccount = (accountInfo: UserProps) => {
        // アカウントを作成
    }

    createAccount(user); // 型通りでなければエラー

    // 継承もできる
    interface AdminUser extends UserProps {
        role: string; // Userに役割roloという要素を追加
    }

    class User{
        useId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
        // コンストラクター
        constructor(useId: number, name: string, age: number, email: string, isActive: boolean){
            this.useId = useId;
            this.name = name;
            this.age = age;
            this.email = email;
            this.isActive = isActive;
            this.getProfile;
            this.getProfile2;
            this.getProfile3;
        }
        
        // 外からアクセスできる
        public getProfile(): string {
            return `Name: ${this.name}, Age: ${this.age}`;
        }

        // 外からアクセスできない（クラス内だけアクセスできる）
        private getProfile2(): string {
            return `Name: ${this.name}, Age: ${this.age}`;
        }

        // サブクラス（継承クラス）内でアクセスできる
        protected getProfile3(): string {
            return `Name: ${this.name}, Age: ${this.age}`;
        }
        
        // インスタンスを生成する前に利用できるメソッド（インスタンスを生成していなくても使える機能）
        static sayHelloWorld(): void {
            console.log("Hello World")
            // returnなし
        }

        // public static, private static, protected static なども可能
    }

    // サブクラス
    class AdminUser extends User{
        role: string;
        constructor(useId: number, name: string, age: number, email: string, isActive: boolean, role: string){
            super(useId, name, age, email, isActive);
            this.role = role;
            this.getProfile;
            this.getProfile3; // protectedのため利用可
            // getProfile2(private)はエラー
            
        }

    }
    User.sayHelloWorld(); // インスタンスを生成する前に利用できるメソッド
    const user1 = new User(1, "Mike", 25, "mike@gmail.com", true); // インスタンス生成
    console.log(user1.age)
    console.log(user1.getProfile()); // getProfile2, getProfile3はprivate,protectedのため不可

    const foo = (arg: string): string => {
        return arg;
    }

    const foo2 = <T>(arg: T): T => {
        return arg;
    }
    foo("Hello World");
    foo2<string>("Hello World");

    // APIにリクエストする関数
    // userIdを指定すると、そのユーザのステータスを返す

    const fetchUserData = async () => {
        const response = await fetch("https://jsonplacehoolder.typicode.com/users/status",{
            userId:1,
        });
        // fetch(endpoint,body)でAPIにリクエスト
        // awaitでレスポンスが返ってくるまで待機
        
        return response.data.status; // responseのjsonファイルの中のdata.statusをリターン
         // でも、レスポンスがtrue, false, null, undefinedの可能性あり
    }
        const isActive: boolean = fetchUserData() ?? false; // ??null型演算子：それ以外の型ならfalseとして

    // userIdを指定すると、そのユーザーの情報を返すAPI
    const fetchUserData2 = async () => {
        const response = await fetch("https://jsonplacehoolder.typicode.com/users/info",{
            userId:1,
        });
        
        return response.data;
    }

    const userInfoData = fetchUserData();
    // {
    //     userId: 1,
    //     name: "Mike",
    //     age: 25,
    //     email: "mike@gmail.com",
    //     family:{
    //         father: "John",
    //         mother: "Jane"
    //     }

    // }

    const fatherName = userInfoData.familly.father; // "John"
    // fatherいなかったらどうなる？ →　エラー

    // 対策
    const fatherName = userInfoData.familly?.father; // famillyという項目がない場合、fatherNameはundefined
    // ダメ！ const fatherName = userInfoData.familly.father?;
    const fatherName = userInfoData?.familly.father; // userInfoDataが存在しない場合、fatherNameはundefined
    const fatherName = userInfoData?.familly?.father; // userInfoDataが存在しないまたはfamiilyが存在ない場合、fatherNameはundefined 
    // ダメ！ const fatherName = userInfoData?.familly?.father?; // userInfoDataがないorfamiilyがないorfatherがない場合undefined 
    const fatherName = userInfoData.familly.father ?? '父親の情報はありません'; // fatherがないなら''を返す
    
}