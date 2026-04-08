import OpenAI from "openai";

const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY

});

export async function parseJD(jd: string) {

  const prompt = `
Extract structured JSON from job description.

{
company,
role,
location,
seniority,
requiredSkills[],
niceToHaveSkills[]
}

JD:
${jd}
`;

  const response = await openai.chat.completions.create({

    model: "gpt-4o-mini",

    messages: [

      {

        role: "user",

        content: prompt

      }

    ],

    response_format: {

      type: "json_object"

    }

  });

  return JSON.parse(

    response.choices[0].message.content!

  );

}

export async function generateResumePoints(data) {

  const prompt = `
write 5 resume bullet points for role

${data.role}

skills:

${data.requiredSkills.join(",")}
`;

  const response = await openai.chat.completions.create({

    model: "gpt-4o-mini",

    messages: [

      {

        role: "user",

        content: prompt

      }

    ]

  });

  return response.choices[0].message.content;

}