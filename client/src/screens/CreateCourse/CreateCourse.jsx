import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCourse } from "../../services/courses";
import "./CreateCourse.css";

const CreateCourse = ({ userData }) => {
  const history = useHistory();

  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  today = today.toISOString().slice(0, 10);
  tomorrow = tomorrow.toISOString().slice(0, 10);

  const [course, setCourse] = useState({
    name: "",
    description: "",
    category: "",
    start_date: today,
    end_date: tomorrow,
    teacher_id: userData.id,
    student_id: null,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleClick = () => {
    history.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCourse(course);
    setTimeout(() => {
      history.push("/browse");
    }, 500);
  };

  return (
    <main className="create-course">
      <form className="create-course-form" onSubmit={handleSubmit}>
        <h2>NEW COURSE</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={course.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          value={course.category}
          onChange={handleChange}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          value={course.description}
          onChange={handleChange}
        />
        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          name="start_date"
          id="start-date"
          value={course.start_date}
          onChange={handleChange}
        />
        <label htmlFor="end-date">End Date</label>
        <input
          type="date"
          name="end_date"
          id="end-date"
          value={course.end_date}
          onChange={handleChange}
        />

        <div className="buttons">
          <button onClick={handleClick}>Cancel</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </main>
  );
};

export default CreateCourse;
