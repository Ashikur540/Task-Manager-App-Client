import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../Components/Spinner/Spinner';
import TaskCard from '../Components/TaskCard/TaskCard';
import { AuthContext } from '../Contexts/AuthProvider';
const MyTasks = () => {
    const { user } = useContext(AuthContext)
    const { data: mytasks = [], isLoading, refetch } = useQuery({
        queryKey: ['mytasks'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/my-tasks?email=${user?.email}`)
            .then(res => res.json())
    })

    // console.log(mytasks);
    if (isLoading) return <Spinner />
    const handleDelete = (id) => {
        const consent = window.confirm("are you sure to delete?")
        if (consent) {
            fetch(`${process.env.REACT_APP_Base_URL}/my-tasks/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Deletion successfull');
                        refetch()
                    }

                })
                .catch(err => toast.error(err))
        }
        else {
            return;
        }
    }



    return (
        <div className="container mx-auto" id="my-tasks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    mytasks?.map(task => <TaskCard task={task} key={task._id} handleDelete={handleDelete} />)
                }
            </div>
        </div>
    )
}

export default MyTasks