import React from 'react'

function Acheivment(props) {
  return (
    <div>
        <h1 className='text-5xl fix font-normal p-2 underline underline-offset-4 decoration-2 '>{props.title}</h1>
        
        <div className='ml-12 mt-4  space-y-2 '>
            <p className='font-medium text-lg  space-y-2 '>✅ Participated In various hackathons</p>
            <div className='ml-6'>
            <ul>↪️ Solving for India Hackathon(GFG and Google Cloud)</ul>
            <ul>↪️ Let's hack Parul(Devfolio ,Quine), Vadodara Hackathon 4.0</ul>
            <ul>↪️More!!</ul>
            </div>
          
            <p className='font-medium text-lg '>✅ Coding Platform Ratings</p>
            <div className='ml-6'>
            <ul>↪️ 1150+ on Codechef</ul>
            <ul>↪️ Solved over 250+ Algorithmic and Data Structure problems on Leetcode, Codechef and GFG </ul>
            <ul>↪️More!!</ul>
           
            </div>
            <p className='font-medium text-lg '>✅ Other Skills</p>
            <div className='ml-6'>
            <ul>↪️ Team Leader of my Hackathon Team(MMBS)</ul>
            <ul>↪️ Hardworking</ul>
            <ul>↪️ Intelectual</ul>
            </div>
        </div>


    </div>
  )
}

export default Acheivment