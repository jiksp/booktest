import React, { Component } from "react";
import Inputid from "./inputid";
import Inputpw from "./inputpw";
import Checkbox from "./checkbox";
import Bottombtn from "./bottombutton";
import Button from "./button";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TTutton: { btntxt: "회원가입하기" }
    };
  }
  render() {
    return (
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
              <h1 class="text-uppercase text-white font-weight-bold">
                당신의 서재
              </h1>
              <hr class="divider_head divider my-4" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 font-weight-light mb-5">
                명깊게 읽은 책의 구절을 저장하고, 자신만의 서재를 만들어 가세요.
                자신의 취향과 비슷한 다른 사람의 서재를 구경하고 자신에게 맞는
                책을 추천 받을 수 있습니다.
              </p>
              <div class="login-input">
                <div>
                  <Inputid></Inputid>
                  <Inputpw></Inputpw>
                  <Checkbox></Checkbox>
                  <Bottombtn></Bottombtn>
                  <Button></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Signin;
