/**
 * uuid-for-link controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::uuid-for-link.uuid-for-link",
  ({ strapi }) => {
    return {
      async create(ctx) {
        const body = JSON.parse(ctx.request.body);
        const tasks = await strapi.documents("api::task.task").findMany({
          filters: {
            speciality: {
              documentId: {
                $eq: body.speciality,
              },
            },
          },
        });

        const uuid = crypto.randomUUID();

        strapi.documents("api::uuid-for-link.uuid-for-link").create({});
      },
    };
  }
);
