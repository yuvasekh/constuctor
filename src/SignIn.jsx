import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Home.css'
const SignIn = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const validatePhoneNumber = (rule, value, callback) => {
    if (!value || !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)) {
      callback('Please enter a valid phone number');
    } else {
      callback();
    }
  };
  const labelStyle = {
    color: 'red'
  };
  return (
    <Form
      name="my-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    className='fullform'
    // style={{ backgroundColor: 'transparent',}}
  
    >
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          {
            validator: validatePhoneNumber,
          },
        ]}
        className='label-item'
        style={{ backgroundColor: 'transparent',color:'#084785' }}
          labelCol={{ style: labelStyle }}
      >

        <Input prefix={<UserOutlined />} placeholder="Enter phone number"  style={{ background: 'transparent', borderColor: '#084785'  }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            min: 8,
            message: 'Password must be at least 8 characters long',
          },
        ]}
      >
        <Input.Password placeholder="Enter password" prefix={<LockOutlined />}  style={{ backgroundColor: 'transparent', borderColor: '#084785'  }}/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: 110, height:50,fontSize: 14 ,alignItems:'center',}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
