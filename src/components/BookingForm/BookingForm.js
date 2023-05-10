import React from "react";
import { useState } from "react";
import FormList from "../FormList/FormList";
import FormLine from "../FormLine/FormLine";
import FormComponent from "../FormComponent/FormComponent";
import DropDownList from "../DropDownList/DropDownList";
import { DatePicker, TimePicker, Space } from "antd";
import range from "lodash.range";

function BookingForm() {
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [tower, setTower] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [comment, setComment] = useState("");
  const format = "HH:mm";

  const checkValue = !date || !time || !tower || !floor || !room ? true : false;

  const towers = [
    { value: "A", text: "A" },
    { value: "B", text: "B" },
  ];

  const handleChangeDate = (dateString) => {
    setdate(dateString);
  };

  const handleChangeTime = (timeString) => {
    settime(timeString);
  };

  function handleChangeTower(e) {
    setTower(e.target.value);
  }

  function handleChangeFloor(e) {
    setFloor(e.target.value);
  }
  function handleChangeRoom(e) {
    setRoom(e.target.value);
  }

  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const dataForm = {};
    dataForm.date = date;
    dataForm.time = time;
    dataForm.tower = tower;
    dataForm.floor = floor;
    dataForm.comment = comment;
    console.log(JSON.stringify(dataForm));
  }

  function handleReset() {
    setdate("");
    settime("");
    setTower("");
    setFloor("");
    setRoom("");
    setComment("");
  }

  return (
    <div>
      <FormList
        title={"Форма бронирования переговорной"}
        name={"Форма бронирования"}
        disabled={checkValue}
        onSubmit={onSubmit}
        handleReset={handleReset}
      >
        <FormLine inputTitle={"Дата"}>
          <div className="FormComponent__input">
            <Space direction="vertical">
              <DatePicker
                value={date}
                allowClear={false}
                placeholder="Выберите дату"
                onChange={handleChangeDate}
              />
            </Space>
          </div>
        </FormLine>

        <FormLine inputTitle={"Время"}>
          <div className="FormComponent__input">
            <TimePicker.RangePicker
              value={time}
              allowClear={false}
              format={format}
              placeholder={["Начало", "Конец"]}
              onChange={handleChangeTime}
            />
          </div>
        </FormLine>

        <FormLine inputTitle={"Башня"}>
          <DropDownList
            nameSelect={"башня"}
            optionValue="Выберете башню"
            value={tower}
            handleChange={handleChangeTower}
          >
            {towers.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </DropDownList>
        </FormLine>

        <FormLine inputTitle={"Этаж"}>
          <DropDownList
            nameSelect={"этаж"}
            optionValue="Выберете этаж"
            value={floor}
            handleChange={handleChangeFloor}
          >
            {range(3, 28).map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </DropDownList>
        </FormLine>

        <FormLine inputTitle={"Переговорная"}>
          <DropDownList
            nameSelect={"переговорная"}
            optionValue="Выберете переговорную"
            value={room}
            handleChange={handleChangeRoom}
          >
            {range(1, 11).map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </DropDownList>
        </FormLine>

        <FormLine inputTitle={"Комментарий"}>
          <textarea
            className="DropDownList"
            autoCorrect="on"
            maxLength={46}
            rows="1"
            onChange={handleChangeComment}
          ></textarea>
        </FormLine>
      </FormList>
    </div>
  );
}

export default BookingForm;
