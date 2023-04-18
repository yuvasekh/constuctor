import { Form, Input, Select, Radio, Row, Col,Button } from 'antd';
import { useState } from 'react';
import './Home.css'
const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = (values) => {
    setSubmitting(true);
    console.log(values);
    // Call API or perform any other action with the form data
    setSubmitting(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleBlur = (field) => {
    form.setFieldsTouched({ [field.target.name]: true });
  };

  const handleChange = (field) => {
    form.setFieldsValue({ [field.target.name]: field.target.value });
  };

  const validateField = (field) => {
    const errorMessages = {
      firstname: 'Please enter your first name',
      lastname: 'Please enter your last name',
      gender: 'Please select your gender',
      mobile: 'Please enter a valid mobile number',
      email: 'Please enter a valid email address',
      country: 'Please select your country',
      state: 'Please enter your state',
      district: 'Please enter your district',
      mandal: 'Please enter your mandal',
      village: 'Please enter your village',
      address: 'Please enter your address',
      zipcode: 'Please enter a valid zip code'
    };
    switch (field) {
      case 'firstname':
      case 'lastname':
      case 'gender':
      case 'country':
      case 'state':
      case 'district':
      case 'mandal':
      case 'village':
      case 'address':
        return {
          validator(rule, value) {
            if (!value) {
              return Promise.reject(errorMessages[field]);
            }
            return Promise.resolve();
          }
        };
      case 'mobile':
        return {
          validator(rule, value) {
            if (!value || !/^[0-9]{10}$/.test(value)) {
              return Promise.reject(errorMessages[field]);
            }
            return Promise.resolve();
          }
        };
      case 'email':
        return {
          validator(rule, value) {
            if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              return Promise.reject(errorMessages[field]);
            }
            return Promise.resolve();
          }
        };
      case 'zipcode':
        return {
          validator(rule, value) {
            if (!value || !/^[0-9]{6}$/.test(value)) {
              return Promise.reject(errorMessages[field]);
            }
            return Promise.resolve();
          }
        };
      default:
        return null;
    }
  };

  return (
    <>
    <div className='signincard'>
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateTrigger="onBlur"
      initialValues={{ gender: 'male', country: 'india' }}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="First Name" name="firstname" rules={[validateField('firstname')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Middle Name" name="middlename">
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={8}>
        <Form.Item label="Last Name" name="lastname" rules={[validateField('lastname')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Designation" name="designation">
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Gender" name="gender" rules={[validateField('gender')]}>
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Mobile" name="mobile" rules={[validateField('mobile')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Email" name="email" rules={[validateField('email')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Country" name="country" rules={[validateField('country')]}>
            <Select onBlur={handleBlur} onChange={handleChange}>
              <Option value="india">India</Option>
              <Option value="usa">USA</Option>
              <Option value="uk">UK</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="State" name="state" rules={[validateField('state')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="District" name="district" rules={[validateField('district')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Mandal" name="mandal" rules={[validateField('mandal')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Village" name="village" rules={[validateField('village')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Address" name="address" rules={[validateField('address')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Zip Code" name="zipcode" rules={[validateField('zipcode')]}>
            <Input onBlur={handleBlur} onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={submitting} style={{ width: 120, height:50,fontSize: 14 ,alignItems:'center',color:'white'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
 
    </div>
    <br>
    </br>
    <br>
    </br>
    </>
  );
};

export default Register;

