import React, { useEffect,useState } from 'react'
import TrainingCard from '../composants/TrainingCard'
import { getAllTraining } from '../api/training'


export default function Trainings() {

    const [items, setItems] = useState([]);

    useEffect(() => { 
        
     getAllTraining()
            .then((res) => {
                setItems(res.data) 
        })
      
    }, [setItems])

    return (
        <div className="container">
            <div className="md-6 d-flex flex-wrap listAdmin">
            {items?.map((itm) => {
                return <TrainingCard key={itm.id} item={itm} />
            })}
            </div>
        </div>
    )
}
