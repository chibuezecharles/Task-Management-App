import * as Yup from "yup";


export const taskvalidationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    startDate: Yup.string()
    .required("Start date is required")
    .test(
      "valid-start-date",
      "Start date must be a valid date",
      (value) => !!Date.parse(value)
    ),
    dueDate: Yup.string()
      .required("Due date is required")
      .test(
        "valid-due-date",
        "Due date must be a valid date",
        (value) => !!Date.parse(value)
      )
      .test(
        "is-after-start-date",
        "Due date cannot be earlier than start date",
        function (value) {
          const { startDate } = this.parent;
          return value && startDate ? new Date(value) >= new Date(startDate) : true;
        }
      ),
  });

  