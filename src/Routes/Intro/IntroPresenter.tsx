import React from 'react';
import { Container, Input, Form, Contents, GreetingMsg, Button, InputBox } from './styles';

const IntroPresenter = () => {
  return (
    <Container>
      <Contents>
        <GreetingMsg>
          반갑습니다.
          <span>백주은 | BaekCo 소개 페이지입니다.</span>
        </GreetingMsg>
        <Form>
          <InputBox>
            <Input placeholder="회사/이름을 입력하세요." autoFocus />
          </InputBox>
          <Button>&gt; 입력하기</Button>
        </Form>
      </Contents>
    </Container>
  );
};

export default IntroPresenter;
