
export default function QuizApp() {
  return (
    <div className="shadow-2xl Quiz_app rounded-xl mx-auto mt-24 p-5 w-[430px] h-[220px] bg-blue-900 flex gap-10 justify-center">

    <div className="text-white">
        <p>Question 1/4</p>
        <p className="pt-2 font-bold">where is the capital of USA?</p>
    </div>
    <div className="text-white flex flex-col gap-3 items-center ">
        <button className="hover:bg-blue-700 p-1 border rounded-md w-36">Washington</button>
        <button className="hover:bg-blue-700 p-1 border rounded-md w-36">san diego</button>
        <button className="hover:bg-blue-700 p-1 border rounded-md w-36">sanfransisco</button>
        <button className="hover:bg-blue-700 p-1 border rounded-md w-36">LA</button>
 

    </div>

    </div>
  )
}
