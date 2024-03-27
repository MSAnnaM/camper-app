import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { book } from '../../../redux/camperSlice';
import { bookSchema } from '../../../Schemas/bookSchemas';
import { Calendar } from './Calendar/Calendar';
import {
  ErrorMsg,
  Form,
  Label,
  SubmitBtn,
  TitleBlock,
} from './BookForm.styled';
import { CalendarIcon } from '../../Icons/AllIcons';

const FORM_VALUES = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const TOAST_CONFIG = { className: 'themed_toaster', duration: 1500 };

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const formatDate = date => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const dayOfWeekIndex = date.getDay();

  const formattedDate = `${MONTHS[monthIndex]} ${day}, ${WEEK_DAYS[dayOfWeekIndex]}`;
  return formattedDate;
};

export const BookForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = async ({ name, email, date, comment }, actions) => {
    const formData = {
      name,
      email,
      date: formatDate(date),
      comment,
    };

    const isValid = await bookSchema.isValid(formData);

    if (!isValid) {
      return;
    }

    dispatch(book(formData));
    toast('Successfully sent!', TOAST_CONFIG);

    setTimeout(() => window.location.reload(), 700);
  };

  return (
    <Formik
      initialValues={FORM_VALUES}
      onSubmit={handleFormSubmit}
      validationSchema={bookSchema}
    >
      {({ touched, errors, handleSubmit, getFieldProps }) => (
        <Form onSubmit={handleSubmit}>
          <TitleBlock>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </TitleBlock>

          <Label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...getFieldProps('name')}
            />
            {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </Label>

          <Label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...getFieldProps('email')}
            />
            {errors.email && touched.email && (
              <ErrorMsg>{errors.email}</ErrorMsg>
            )}
          </Label>

          <Label>
            {<Calendar />}
            <CalendarIcon width={20} height={20} />
            {errors.date && touched.date && <ErrorMsg>{errors.date}</ErrorMsg>}
          </Label>

          <Label>
            <textarea
              name="comment"
              placeholder="Comment"
              {...getFieldProps('comment')}
            />
            {errors.comment && touched.comment && (
              <ErrorMsg>{errors.comment}</ErrorMsg>
            )}
          </Label>

          <SubmitBtn type="submit" disabled={Object.keys(errors).length > 0}>
            Send
          </SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};
