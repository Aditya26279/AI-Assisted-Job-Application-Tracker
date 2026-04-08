import {

  Droppable

} from "@hello-pangea/dnd";

import JobCard from "./JobCard";

export default function Column({

  status,

  data

}) {

  return (

    <Droppable

      droppableId={status}

    >

      {p => (

        <div

          ref={p.innerRef}

          {...p.droppableProps}

          className="bg-gray-100 p-3 rounded"

        >

          <h2>{status}</h2>

          {data.map(

            (job, i) => (

              <JobCard

                key={job._id}

                job={job}

                index={i}

              />

            )

          )}

          {p.placeholder}

        </div>

      )}

    </Droppable>

  );

}