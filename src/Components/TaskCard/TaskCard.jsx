import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function TaskCard({ task, handleDelete }) {
    // console.log("from component", task);
    const { taskTitle, taskDesc, taskAuthor, taskImage, _id } = task;
    return (
        <>
            {/*<!-- Component: E-commerce card --> */}
            <div className="overflow-hidden w-auto rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                {/*  <!-- Image --> */}
                <figure>
                    <img
                        src={taskImage}
                        alt="cardimage"
                        className="aspect-video w-full"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4 flex justify-between items-center">
                        <h3 className="text-xl font-medium text-slate-700">
                            {taskTitle}
                        </h3>
                        <div className="flex justify-evenly items-center cursor-pointer text-xl space-x-2">
                            {/* /my-tasks/:id/edit */}
                            {/**/}
                            <Link to={`/my-tasks/${_id}/edit `}>
                                <button onClick={() => { }}> <BiEdit /></button>
                            </Link>
                            <button onClick={() => handleDelete(_id)}><BiTrashAlt /></button>
                        </div>
                        {/* <p className=" text-slate-400"> $8.99</p> */}
                    </header>
                    <p>
                        {taskDesc}
                    </p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-end p-6 pt-0">
                    <Link to='/completedTask'><button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span span > Complete task</span>
                    </button></Link>
                </div >
            </div >
            {/*<!-- End E-commerce card --> */}
        </>
    )
}
