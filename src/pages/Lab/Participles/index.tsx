import {Card, Descriptions, message, Space} from 'antd';
import ProForm, {ProFormTextArea} from '@ant-design/pro-form';
import {PageContainer} from '@ant-design/pro-layout';
import React, {useState} from 'react';
import {sendSentence} from "@/services/sentence";
import {sentenceType} from "@/model/sentence";


const ContactManager: React.FC = () => {
  const [res, setRes] = useState({main:"",attribute:"",value:"",message:""});

  const handleFinish = async (values: sentenceType) => {
    const {sentenceContent} = values;

    const result = await sendSentence({
      sentenceContent: sentenceContent
    });
    if (result.message === '运行成功') {
      setRes(result);
      message.success("解析成功");
    } else {
      message.error(res.message);
    }
  };


  return (
    <PageContainer content={
      <Space size={"large"}>
        <div>请在下方文本框内输入要分析的语句</div>
      </Space>
    }>
      <Card bordered={false}>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <ProForm
            hideRequiredMark
            // style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
            name="basic"
            layout="vertical"
            initialValues={{ public: '1' }}
            onFinish={handleFinish}
          >
            <ProFormTextArea
              label="原始语句"
              // width="xl"
              style={{whiteSpace:'pre-wrap'}}
              name="sentenceContent"
              rules={[
                {
                  required: true,
                  message: '请输入具体内容(例如：大象的体重是1000千克)',
                },
              ]}
              placeholder="请输入具体内容(例如：大象的体重是1000千克)"
            />
          </ProForm>
          <Descriptions bordered>
            <Descriptions.Item label="物">{ res.main }</Descriptions.Item>
            <Descriptions.Item label="特征">{ res.attribute }</Descriptions.Item>
            <Descriptions.Item label="量值">{ res.value }</Descriptions.Item>
          </Descriptions>
        </Space>
      </Card>
    </PageContainer>
  );
};

export default ContactManager;
