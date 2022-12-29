import React from 'react'

const AddTask = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center my-6 font-semibold text-4xl text-gray-900">Add Your Task</h1>
            <div className="mx-auto max-w-2xl mt-8">
                <form action="">
                    {/* <!-- Component: Rounded large basic input --> */}
                    <div class="h-auto">
                        <div class="relative my-6">
                            <input id="id-l01" type="text" name="id-l01" placeholder="your name" class="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                            <label for="id-l01" class="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-[''] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                🔖 Task Title
                            </label>
                        </div>
                    </div>


                    <div class="relative">
                        <textarea id="id-l02" type="text" name="id-l02" rows="3" placeholder="Write your message" class="relative w-full p-4 placeholder-transparent transition-all border outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"></textarea>
                        <label for="id-l02" class="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-[''] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                            ✍  Write task description
                        </label>
                    </div>
                    {/* <!-- End Plain large size basic textarea --> */}

                    {/* ----------- */}
                    <div className="my-4 py-2">
                        <input type="file" className="file-input file-input-bordered border-gray-300 file-input-success w-full max-w-xs" />
                    </div>


                    {/*<!-- Component: Large primary elevated button --> */}
                    <button className="inline-flex mt-4 h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>Add Task</span>
                    </button>
                    {/*<!-- End Large primary elevated button --> */}




                </form>
            </div>
        </div>
    )
}

export default AddTask