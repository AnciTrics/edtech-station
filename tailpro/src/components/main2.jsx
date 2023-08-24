import React from 'react'

const Main2 = () => {
  return (
    <div className="max-w-[1290px] mx-auto h-[700px] border-black">
      <div className="duration-300 flex flex-col md:flex-row justify-center items-center  h-[100%] gap-10">
        <img
          style={{ mixBlendMode: "darken", color: "white" }}
          className="h-[300px]"
          src="https://img.freepik.com/free-vector/human-hand-typing-computer-with-different-symbols-located-near-cup-coffee-side-view-open-laptop-flat-vector-illustration-new-technologies-millennials-work-concept_74855-21931.jpg?w=2000"
          alt=""
        />
        <div className="duration-300 w-[300px] md:w-[600px]">
          <h3 className="text-[#ffd300] font-bold text-2xl">
            Learn From Experts
          </h3>
          <p className="text-[16px] mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            laboriosam, ad delectus non ipsam velit! Praesentium magnam nam,
            enim, sunt hic voluptate fuga aut nostrum sint, doloremque
            voluptates sequi quas.
          </p>
          <button className="bg-[black] py-2 px-10 text-[white] rounded-lg mt-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main2
