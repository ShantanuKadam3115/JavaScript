const coding = ["cpp", "JS", "python", "Kotlin", "cSharp"]

//  const values = coding.forEach((item)=>{
//     console.log(item)
// } )

// console.log(values)


// const newNums = nums.filter( (val) => {
    //     return val>2
    // })
    // console.log(newNums)
    
    
    // const forNums = []
    // nums.forEach( (val)=> {
        //     if(val > 2) forNums.push(val)
        // })
    
    // console.log(forNums);
    
    
    //when you use {}, you create a scope so you need to return the output explicitly. In case of using (), the value is returned implicitly.
    
    //Filter
    
    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((val)=> val.genre === 'Science')
userBooks = books.filter((val)=>{ 
    return val.publish >= 1995 && val.genre =='Science'
})

//   console.log(userBooks);

//Maps

const nums =[1,2,3,4,5,6,7,8,9]

let newNums = nums.map((val)=> val + 10)

newNums = nums.map((val)=> val*10).map((num)=> num+1)
newNums = nums.map((val)=> val*10).map((num)=> num+1).filter((i) => i > 40)



console.log(newNums);

  
