import { Form, Input, Button } from 'antd';
import { UserOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
    <br></br>
    <div className='signincard'>
    <Form form={form} onFinish={onFinish}>
      <FormItem label="Name" name="name" rules={[{ required: true, message: 'Please enter your name.' }]}>
        <Input prefix={<UserOutlined />} placeholder="Name" />
      </FormItem>
      <FormItem label="City" name="city" rules={[{ required: true, message: 'Please enter your city.' }]}>
        <Input prefix={<EnvironmentOutlined />} placeholder="City" />
      </FormItem>
      <FormItem label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number.' }, { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10 digit phone number.' }]}>
        <Input prefix={<PhoneOutlined />} placeholder="Phone" />
      </FormItem>
      <FormItem label="Email" name="email" rules={[{ required: true, message: 'Please enter your email address.' }, { type: 'email', message: 'Please enter a valid email address.' }]}>
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </FormItem>
      <FormItem label="Message" name="message" rules={[{ required: true, message: 'Please enter your message.' }]}>
        <Input.TextArea prefix={<MessageOutlined />} placeholder="Message" />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" style={{ width: 120, height:50,fontSize: 14 ,alignItems:'center',color:'white'}}>
          Submit
        </Button>
      </FormItem>
    </Form>
    </div>
    <br>
    </br>
    <br>
    </br>
    </>
  );
};

export default Contact;
