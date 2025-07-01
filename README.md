## test_branch

- [1. Dev-Tools-Notes](#1-dev-tools-notes)
  - [1.1. TypeScript](#11-typescript)
    - [1.1.1. 型](#111-型)
    - [1.1.2. 関数](#112-関数)
    - [1.1.3. オブジェクト](#113-オブジェクト)
    - [1.1.4. クラス](#114-クラス)
    - [1.1.5. ジェネリクス](#115-ジェネリクス)
    - [1.1.6. NULL型演算子](#116-null型演算子)
    - [1.1.7. オプショナルチェーン](#117-オプショナルチェーン)
  - [1.2. Git](#12-git)
    - [1.2.1. Gitの基本コマンド【ローカル】](#121-gitの基本コマンドローカル)
      - [1.2.1.1. ①初期化(init)【ローカル】](#1211-初期化initローカル)
      - [1.2.1.2. ②記録(add commit)【ローカル】](#1212-記録add-commitローカル)
      - [1.2.1.3. ③状況確認(diff,status)【ローカル】](#1213-状況確認diffstatusローカル)
      - [1.2.1.4. ④履歴の確認(log)【ローカル】](#1214-履歴の確認logローカル)
      - [1.2.1.5. ⑤元に戻す(restore)【ローカル】](#1215-元に戻すrestoreローカル)
  - [1.3. GitHub](#13-github)
    - [1.3.1. GitHubでチーム開発する方法](#131-githubでチーム開発する方法)
      - [1.3.1.1. ブランチ](#1311-ブランチ)
      - [1.3.1.2. コンフリクト解消方法](#1312-コンフリクト解消方法)
      - [1.3.1.3. GitHubとの通信](#1313-githubとの通信)
        - [1.3.1.3.1. ②リモートリポジトリをローカルリポジトリに追加](#13131-リモートリポジトリをローカルリポジトリに追加)
        - [1.3.1.3.2. ③プッシュ](#13132-プッシュ)
        - [1.3.1.3.3. ④プル](#13133-プル)
        - [1.3.1.3.4. ⑤フェッチ](#13134-フェッチ)
        - [1.3.1.3.5. プルとフェッチの違いは？](#13135-プルとフェッチの違いは)
        - [1.3.1.3.6. プルリクエスト](#13136-プルリクエスト)
    - [1.3.2. コマンド](#132-コマンド)
    - [1.3.3. その他](#133-その他)
      - [1.3.3.1. Draft](#1331-draft)
    - [1.3.4. コミットメッセージの絵文字](#134-コミットメッセージの絵文字)


# 1. Dev-Tools-Notes
## 1.1. TypeScript
### 1.1.1. 型
```typescript
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
const random: any = "Hello World"; //any（なんでも）
const gender: "male" | "female" = "male"; // union(選択)
const value : string | number[] = [1,2,3]; // 型の違うunion
// 出力
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
```
### 1.1.2. 関数
```typescript
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
console.log(reverseArray(["a","b","c"],true)); // ["c","b","a","Tom"]

// 簡単ver
const rev = (arr: number[]): number[] => {
    return arr.reverse();
}
console.log(rev([1,2,3,4,5])); // [5,4,3,2,1]
```

### 1.1.3. オブジェクト
```typescript
//typeで書く方法もあるがこっちの方がわかりやすい
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
```

### 1.1.4. クラス
```typescript
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
    // ----------------------メソッド↓----------------------
    
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
```

### 1.1.5. ジェネリクス
  関数を定義する際に、引数の型を書かず、呼び出しのタイミングで型を設定する。

```typescript
// 普通の関数
const foo = (arg: string): string => {
    return arg;
}
// ジェネリクスの関数
const foo2 = <T>(arg: T): T => {
    return arg;
}

foo("Hello World");
foo2<string>("Hello World"); //呼び出す際に型を指定
```

### 1.1.6. NULL型演算子
```typescript
// APIにリクエストする関数
// userIdを指定すると、そのユーザのステータスを返す
// awaitで待ちが発生するため、async関数とすることでほかの作業を進めさせる
const fetchUserData = async () => {
    const response = await fetch("https://jsonplacehoolder.typicode.com/users/status",{
        userId:1,
    });
    // fetch(endpoint,body)でAPIにリクエスト
    // awaitでレスポンスが返ってくるまで待機
    
    return response.data.status; // responseのjsonファイルの中のdata.statusをリターン
      // でも、レスポンスがtrue, false, null, undefinedの可能性あり

    const isActive: boolean = fetchUserData() ?? false; // ?? null型演算子：それ以外の型ならfalseとして
    if (isActive){...} // もしisActiveがTrueならば...
}
```

### 1.1.7. オプショナルチェーン
```typescript
// userIdを指定すると、そのユーザーの情報を返すAPI
const fetchUserData2 = async () => {
    const response = await fetch("https://jsonplacehoolder.typicode.com/users/info",{
        userId:1,
    });
    
    return response.data;
}
  
const userInfoData = fetchUserData();
  // 想定されるデータ
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

  const fatherName = userInfoData.family.father; // "John"
  // fatherいなかったらどうなる？ →　エラー

  // 対策
  const fatherName = userInfoData.famiy.father ?? '父親の情報はありません'; // fatherがないなら''を返す
  const fatherName = userInfoData.family?.father; // familyという項目がない場合、fatherNameはundefined
  const fatherName = userInfoData?.family.father; // userInfoDataが存在しない場合、fatherNameはundefined
  const fatherName = userInfoData?.family?.father; // userInfoDataが存在しないまたはfamilyが存在ない場合、fatherNameはundefined 

  // ダメ！ const fatherName = userInfoData.family.father?;
  // ダメ！ const fatherName = userInfoData?.family?.father?; // userInfoDataがないorfamilyがないorfatherがない場合undefined 
  

```

## 1.2. Git
変更履歴を保存できる<br>
①ファイルのバージョン管理を行う<br>
②以前の状態に戻せる<br>
③チームでスムーズ開発

<img src="./img/スクリーンショット 2025-06-23 094140.png" width=400>

### 1.2.1. Gitの基本コマンド【ローカル】
#### 1.2.1.1. ①初期化(init)【ローカル】
ローカルのファイルからローカルリポジトリを作成（DBが作成される）
  
    git init

<img src="./img/スクリーンショット 2025-06-23 094156.png" width=400>

#### 1.2.1.2. ②記録(add commit)【ローカル】
ワークツリー：手元の作業環境<br>
ステージ（インデックス）：ローカルとリポジトリのインターフェース<br>
リポジトリ：変更履歴を記録する場所<br>

git add：変更したいファイルを選択<br>
git commit：ローカルリポジトリ更新作業

    git add <ファイル名>　// git add .　でカレントディレクトリすべて
    git commit -m "コミットメッセージ" // -mでメッセージ追加

<img src = "./img/スクリーンショット 2025-06-23 094647.png" width=400>

#### 1.2.1.3. ③状況確認(diff,status)【ローカル】
git addする前にステージとローカルの変更内容を確認する
diff：変更内容をチェック（ローカルとステージ、ローカルとリポジトリ）
status：変更ファイルをチェック（ローカルとステージ）

    git diff // ローカルとリポジトリの差分チェック
    git diff -staged // リポジトリとステージの差分チェック
    git status // 変更ファイルを確認（ローカルとステージ）

<img src="./img/スクリーンショット 2025-06-23 101611.png" width=400>

#### 1.2.1.4. ④履歴の確認(log)【ローカル】
リポジトリのログを確認（git commitの際のコメントを見れる）

  git log

<img src="./img/スクリーンショット 2025-06-23 103316.png" width=400>

#### 1.2.1.5. ⑤元に戻す(restore)【ローカル】

    git restore <ファイル名> // ワークツリーの変更を取り消す（ローカルのリポジトリの内容に戻すということ）
    git restore --staged <ファイル名>　// ステージに挙げた変更をワークツリーに戻す

<img src="./img/スクリーンショット 2025-06-23 103525.png" width=400>

## 1.3. GitHub
共有
①コードの共有
②コードレビュー
③OSSに参加(Open Source Software)新たな言語作成に参加

### 1.3.1. GitHubでチーム開発する方法
#### 1.3.1.1. ブランチ
分岐して開発

    // 作成と一覧表示
    git branch <ブランチ名> // ブランチの作成
    git branch // ブランチ一覧
    git branch -a // GitHubも含めたブランチ一覧（リモートリポジトリ）
    
    // ブランチの切り替え
    git switch <ブランチ名> // ブランチの切り替え
    git switch -c <ブランチ名> // ブランチを新規作成して切り替え（-cはcreate）
    (git checkout -b <ブランチ名> // 上と同じ（従来）)

    // ブランチをマージ
    git merge <ブランチ名> // 現在いるブランチにほかのブランチを指定してマージする
    git merge origin/main // リモート名/ブランチ名　でGitHub上にあるブランチをローカルにマージしたい場合

<img src="./img/スクリーンショット 2025-06-23 104207.png" width=400>

#### 1.3.1.2. コンフリクト解消方法
①ファイルの内容を修正<br>
②<<,==,>>を削除

<img src="./img/スクリーンショット 2025-06-23 111144.png" width=300>
<img src="./img/スクリーンショット 2025-06-23 111551.png" width=300>

#### 1.3.1.3. GitHubとの通信
#####　①GitHubに登録

    git config -global user.name "Hiromichi99" // ユーザー名
    git config -global user.email "taniguchi.hiromichi@jp.panasonic.com"

##### 1.3.1.3.1. ②リモートリポジトリをローカルリポジトリに追加

    git remote add origin URL （origin<リモート名> URL<リモートURL>）
    // originとリポートリポジトリのURLを紐づける　
    // originはリモートリポジトリのフォルダを移動するたびに変更される
    （originはカレントディレクトリに紐づけされたリモートリポジトリのURLになる）

※Originについて

    git cloneの場合：勝手に紐づけされる
    git initなどでロカールリポジトリをリモートリポジトリにアップする場合：originは設定されていないので明示的に言う必要がある

##### 1.3.1.3.2. ③プッシュ
ローカルの内容をリモートリポジトリに反映させる

    git push origin main （origin<リモート名> main<ブランチ名>）
    // 前もってmainブランチに移動しておき、mainブランチをリモートリポジトリに反映させるpush

<img src="./img/スクリーンショット 2025-06-23 112500.png" width=400>

##### 1.3.1.3.3. ④プル
プル：リモートリポジトリをローカルに反映させる

    git pull origin main // originというリモートリポジトリのmainブランチをローカルに反映させる
    git pull // 省略可能

<img src="./img/スクリーンショット 2025-06-23 143432.png" width=400>

##### 1.3.1.3.4. ⑤フェッチ
フェッチ： ローカルのリポジトリまで反映させる

    git fetch origin // originというリモートリポジトリをローカルのリポジトリに反映させる

<img src="./img/スクリーンショット 2025-06-23 143848.png" width=400>

##### 1.3.1.3.5. プルとフェッチの違いは？
プル：ローカル、ステージ両方に反映<br>
フェッチ：ステージのみに反映（ローカルに反映させるためにはmergeが必要）<br>
pull = fetch + merge

<img src="./img/スクリーンショット 2025-06-23 144124.png" width=400>

##### 1.3.1.3.6. プルリクエスト
  1. mainを最新に更新（pull）
  2. ブランチ作成（編集するブランチを作る）
  3. ファイル修正・コミット
  4. push
  5. プルリクエスト（変更したいです）
  6. コードレビュー（ほんとに変更していいの？）
  7. マージ（合体！）
   
<img src="./img/スクリーンショット 2025-06-23 145010.png" width=400>

### 1.3.2. コマンド
    git checkout ブランチ名：ブランチを変更する
    git checkout -b branch3：ブランチ作成と変更を一括で行う

### 1.3.3. その他
#### 1.3.3.1. Draft
Pull Requestの一種で、作業中のコードをほかのチームメンバーと共有するための機能

### 1.3.4. コミットメッセージの絵文字
バグ修正：🐛
新機能追加：✨
機能改修：⚡️
軽微な修正：🩹
リファクタリング：♻️
デザイン修正：🎨
hotfixや緊急の修正：🚑
WIP：🚧
テストコードの追加や修正：✅

first commit：🎉
ライブラリ追加やconfig周りの修正：🔧
機能削除:🔥
セキュリティの修正：🔒
typoの修正：✏️