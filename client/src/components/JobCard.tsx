import {

  Draggable

} from "@hello-pangea/dnd";

export default function JobCard({

  job,

  index

}) {

  return (

    <Draggable

      draggableId={job._id}

      index={index}

    >

      {p => (

        <div

          ref={p.innerRef}

          {...p.draggableProps}

          {...p.dragHandleProps}

          className="bg-white p-2 mb-2 shadow"

        >

          <h3>{job.company}</h3>

          <p>{job.role}</p>

        </div>

      )}

    </Draggable>

  );

}