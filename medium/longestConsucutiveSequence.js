/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive1 = function (nums) {
  console.time("start");
  let longestLength = 0;
  let exploreMap = new Map();
  for (let num of nums) {
    exploreMap.set(num, false);
  }

  for (let num of nums) {
    let currentLength = 1;

    let nextNum = num + 1;
    while (exploreMap.has(nextNum) && exploreMap.get(nextNum) == false) {
      currentLength++;
      exploreMap.set(num, true);
      nextNum++;
    }

    let prevNum = num - 1;
    while (exploreMap.has(prevNum) && !exploreMap.get(prevNum)) {
      currentLength++;
      exploreMap.set(prevNum, true);
      prevNum--;
    }
    longestLength = Math.max(longestLength, currentLength);
  }
  console.log("🚀 ~ longestConsecutive ~ longestLength:", longestLength);
  console.timeEnd("start");
  return longestLength;
};

// brute force
var longestConsecutive2 = function(arr) {
    console.time("start");
    if(arr.length==0) return 0

    let count=1, max = 1
    arr.sort((a, b) => a - b)                       // Step1:  Sort karo

    for(let i=0; i<arr.length; i++) {

        if(arr[i]- arr[i-1] == 1) {                 // Step2 : Aur dekho ki, [mai - mere_se_pichla_elem == 1?]
            count=count+1 ;                         //         hua, toh bas count kr lo
            max = Math.max(max, count)              //         count krne ke saath saath,  maxLength bhi note krte jaa rhe hum
                                                    //         Ek time aisa ayega, ki, consecutive ginn'ne ka streak tut jyega, aur count phirse apne ko 1 se suru krna pdega
                                                    //         example : [1 2 3 4 6 7]
                                                    //                   isme 1234 ka streak rhega, phir 6 pe tut jyega
                                                    //                   toh 1234 ke liye count aur max dono = 4.
                                                    //                   6 pe tuta, so, count became 1 (look in else condition)
                                                    //                   so, 67 ke liye, count=2 , aur max = Math.max(4{from 1234}, 2{from 67})
        }

        else if(arr[i]==arr[i-1]) continue          // yeh step LEARNING hai tere liye. nahi toh tu toh SET laga rha tha duplicate hataane ke liye

        else {
            count = 1
        }

    }
    console.timeEnd("start");
    console.log("🚀 ~ longestConsecutive ~ max:", max)
    return max
};

var longestConsecutive3 = function (arr) {
  console.time("start");
  if (arr.length <= 0) return 0;

  let map = new Map();
  // STEP1 : MAP MEIN SABKO SEQ INITIATOR ASSUME KRKE, TRUE SET KARO
  for (let elem of arr) {
    map.set(elem, 1); // map  bithaa ke, sabko True set kr diya
    // mtlb, assume yeh kr rhe hum abhi ki
    // harr ek elem, kisi sequence ki suruwaat hai (thats false, we do know that ;)  )
  }
  // STEP2: YEH DEKHO KI, ISSE PEHLE WALA KAHI PRESENT TOH NAHI HAI MAP MEIN
  for (let i in arr) {
    if (map.has(arr[i] - 1)) {
      // ab , ARRAY mein loop laga ke yeh dekh rhe ki
      // KYA, isse pehle wla numeric number, Map mein already pada hai ?
      // agar hai, toh YEH TOH SURUWAAT nahi ho skta
      // suruwaat kaise hoga yeh. inbetween wala kuch elem hoyega
      // example: 4 ke liye check kr rhe, KYA 3 map mein pada hai ?
      //          agar hai, mtlb, suruwaat probably 3 hoyega na. 4 toh nahi hoga na suruwaat
      map.set(arr[i], 0); // hence, agar pada hai, toh isko FALSE set kr do.
    }
  }
  // ab TRUE woh log reh gaye, jo sacchi kisi sequence ki suruwaat hai
  // example :  [1234] [100] [200] yeh sequence bann rhi thi initially,
  //            toh 1->TRUE
  //              100->TRUE
  //              200->TRUE mila hai sacchi ka opne ko.
  //
  //  so sequence intiator sab mil gaye,
  //  ab yeh dekhte hai, ki kaunsa sequence intiator, sabse badaa sequence generate krta hai
  //  lets count

  //STEP3: AB SAB SEQ INITIATORS KI LENGTH CALC KRO
  let maxLen = 1;
  for (let elem of arr) {
    if (map.get(elem) == 1) {
      // TRUE walo ko liye, sequence ki length dhundhenge
      let seqCount = 1; // sab element pkka se, kisi sequence ke initiator hai yaha ab. so pehle se hi count=1 set kr diya h (asaani ho rha tha aise coding krne mein)
      while (map.has(elem + seqCount)) {
        // jab tak sequence badhta rhe,
        seqCount += 1; // count krte raho
      }
      maxLen = Math.max(maxLen, seqCount); // jab sequence bdhna khatam ho jaaye, tab maxLen ko update kr do (agar seqCount badaa mila apne ko toh )
    }
  }
  console.timeEnd("start");
  console.log("🚀 ~ longestConsecutive ~ maxLen:", maxLen);
  return maxLen;
};

var longestConsecutive4 = function (nums) {
  console.time("start");

  if (nums.length <= 1) return nums.length; // Early exit for empty array

  const numSet = new Set(nums); // Store all elements in a set
  let longest = 0; // Variable to store the longest streak

  for (let num of numSet) {
    // Only check for the start of a sequence (num - 1 is not in the set)
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count the streak while consecutive numbers exist
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Update longest streak
      longest = Math.max(longest, currentStreak);
    }
  }
  console.timeEnd("start");
  console.log("🚀 ~ longestConsecutive ~ longest:", longest);
  return longest;
};
let arr = [
  5399, 5400, 5401, 5402, 5403, 5404, 5405, 5406, 5407, 5408, 5409
];
longestConsecutive4(arr);
