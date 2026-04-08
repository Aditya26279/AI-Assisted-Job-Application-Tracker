import Application from "../models/Application";

import {

  parseJD,

  generateResumePoints

} from "../services/aiService";

export async function createApplication(

  req,

  res

) {

  const parsed = await parseJD(

    req.body.jd

  );

  const suggestions =

    await generateResumePoints(

      parsed

    );

  const app = await Application.create({

    ...parsed,

    resumeSuggestions:

      suggestions.split("\n"),

    userId: req.user.id

  });

  res.json(app);

}

export async function getApplications(

  req,

  res

) {

  const apps =

    await Application.find({

      userId: req.user.id

    });

  res.json(apps);

}

export async function updateStatus(

  req,

  res

) {

  const updated =

    await Application.findByIdAndUpdate(

      req.params.id,

      {

        status: req.body.status

      },

      { new: true }

    );

  res.json(updated);

}

export async function deleteApplication(

  req,

  res

) {

  await Application.findByIdAndDelete(

    req.params.id

  );

  res.sendStatus(200);

}