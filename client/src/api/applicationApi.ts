import api from "./api";

export function createApplication(

  jd,

  token

) {

  return api.post(

    "/applications",

    { jd },

    {

      headers: {

        Authorization: token

      }

    }

  );

}

export function getApplications(

  token

) {

  return api.get(

    "/applications",

    {

      headers: {

        Authorization: token

      }

    }

  );

}

export function updateStatus(

  id,

  status,

  token

) {

  return api.put(

    "/applications/" + id,

    { status },

    {

      headers: {

        Authorization: token

      }

    }

  );

}