import { Formik, Form, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import {taskvalidationSchema} from "../formValidationSchema";
import { RootState } from "../redux/store";

const TaskForm = ({ onSubmit }: any) => {
  const tasks = useSelector((state: RootState) => state.tasks);

  const editDetails = useSelector(
    (state: RootState) => state.tasks?.editingTask
  );

  const initialValues = {
    title: editDetails?.title || "",
    description: editDetails?.description || "",
    category: editDetails?.category || "Work",
    startDate: editDetails?.startDate || "",
    dueDate: editDetails?.dueDate || "",
    isCompleted: editDetails?.isCompleted || false,
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={taskvalidationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values, handleBlur, handleChange, isSubmitting }) => (
        <Form className="p-4 rounded shadow ">
          <div className="mb-4 ">
            <label>Title</label>
            <input
              placeholder="Enter task title"
              type="text"
              name="title"
              value={values?.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block p-2 border rounded text-black w-full `}
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>Description</label>
            <textarea
              placeholder="Enter task description"
              name="description"
              value={values?.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block p-2 border rounded text-black w-full`}
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>Category</label>
            <select
              name="category"
              value={values?.category}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block p-2 border rounded w-full text-black `}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <div className="mb-4">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={values?.startDate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block p-2 border rounded text-black w-full `}
            />
            <ErrorMessage
              name="startDate"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label>End Date</label>
            <input
              type="date"
              name="dueDate"
              value={values?.dueDate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`block p-2 border rounded text-black w-full`}
            />
            <ErrorMessage
              name="dueDate"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              name="isCompleted"
              checked={values?.isCompleted}
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-4 w-4"
            />
            <label htmlFor="isCompleted">Mark as Completed</label>
          </div>

          <div className="flex flex-row justify-end">
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white p-4 rounded"
              disabled={isSubmitting}
            >
              {tasks?.loading ? "Loading..." :editDetails?.id ? "Edit Task" : "Save Task"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
