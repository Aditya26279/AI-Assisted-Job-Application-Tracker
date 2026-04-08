import { useEffect, useState } from "react";

import KanbanBoard from "../components/KanbanBoard";

import {

  getApplications,

  updateStatus

} from "../api/applicationApi";

export default function Dashboard() {

  const [

    apps,

    setApps

  ] = useState([]);

  const token =

    localStorage.getItem("token");

  async function load() {

    const res =

      await getApplications(

        token

      );

    setApps(res.data);

  }

  async function moveCard(

    id,

    status

  ) {

    await updateStatus(

      id,

      status,

      token

    );

    load();

  }

  useEffect(() => {

    load();

  }, []);

  return (

    <KanbanBoard

      data={apps}

      moveCard={moveCard}

    />

  );

}