import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../Components/Spinner/Spinner';
import TaskCard from '../Components/TaskCard/TaskCard';

const MyTasks = () => {
    const { data: mytasks = [], isLoading } = useQuery({
        queryKey: ['mytasks'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/my-tasks`)
            .then(res => res.json())
    })

    console.log(mytasks);

    if (isLoading) return <Spinner />
    return (
        <div className="container mx-auto" id="my-tasks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    mytasks?.map(task => <TaskCard task={task} />)
                }
            </div>
        </div>
    )
}

export default MyTasks