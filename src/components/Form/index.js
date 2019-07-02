import React from "react";
import { connect } from "react-redux";
import ContactsInputs from "./components/ContactInputs";
import { getModifiedKeyInput } from "../../common/helpers";
import CheckboxSkills from "./components/CheckboxSkills";
import TextField from "./components/TextField";
import RadioButtons from "./components/RadioButtons";

class Form extends React.Component {
  generatorId = () => {
    return this.props.uniqid();
  };

  render() {
    const inputsList = this.props.inputs.map(item => {
      const key = getModifiedKeyInput(Object.keys(item).toString()),
        value = Object.values(item).toString();
      return (
        <ContactsInputs key={this.generatorId()} label={key} text={value} />
      );
    });

    const skillsList = this.props.checkboxSkills.map(item => {
      return (
        <CheckboxSkills
          key={this.generatorId()}
          id={this.generatorId()}
          text={item.text}
        />
      );
    });

    const radioList = this.props.radio.map(item => {
      return (
        <RadioButtons
          key={this.generatorId()}
          text={item.text}
          value={item.value}
          check={item.isChecked}
        />
      );
    });

    return (
      <form className="header">
        <fieldset>{inputsList}</fieldset>
        <fieldset>
          <h3>Расскажите о себе чекбоксами</h3>
          <p>
            Отметьте чекбоксами пункты, которые соответствуют вашим скиллам.
            Кстати, отсутствие опыта не означает, что у вас меньше шансов стать
            одним из наших товарищей. Это означает, что вы будете получать те
            задачи, с которыми гарантировано будете справляться.
          </p>
          {skillsList}
        </fieldset>

        <fieldset>
          <input type="range" />
        </fieldset>

        <fieldset>
          <h3>Расскажите о себе словами</h3>
          <p>
            Напишите пару предложений, чем вас привлекла наша вакансия и чего вы
            ожидаете от работы в CSSSR. Кстати, будет здорово, если при нехватке
            места для текста строки будут добавляться автоматически.
          </p>
          <TextField />
        </fieldset>

        <fieldset>
          <h3>Какие у вас планы на будущее?</h3>
          <p>
            Этот ответ ни на что не повлияет. Не беда, если в будущем ваши планы
            поменяются.
          </p>
          {radioList}
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputs: state.inputs.obj,
    checkboxSkills: state.checkboxes.obj,
    radio: state.radioButtons.obj
  };
};

export default connect(
  mapStateToProps,
  null
)(Form);
