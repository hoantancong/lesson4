//shortcut rfc

import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import './Main.css';
//update value
var currentUpdateIndex = null;
export default function Main() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [listUser, setListUser] = useState([]);
    const changeName = (event) => {
        setName(event.target.value);
    }
    const changeAge = (event) => {
        setAge(event.target.value);
    }
    let defaultColor = 'rgb(100,100,100';
    //use effect: lang nghe su kien thay doi, bien thay doi
    //history
    let history = useHistory();
    useEffect(() => {
        console.log('Hello first');
    }, []);
    useEffect(() => {
        //khi 
        console.log('age change');
    }, [age]);
    useEffect(() => {
        console.log('new user add');
    }, [listUser])
    const goAbout = () => {
        //chuyen den url moi
        history.push('/about');
    }
    const onSubmit = () => {
        let obj = { name, age };
        setName('');
        setAge(0);
        let newList = listUser;
        newList.push(obj);
        //setListUser(newList);
        setListUser([...newList]);


    }
    const removeItem = (index) => {
        let newList = listUser;
        newList.splice(index, 1);
        setListUser([...newList]);
    };
    const changeColor = (index) => {
        // let newColorList = listColor;
        // newColorList[index] = 'rgb(${item.name})';
        // setListColor([...newColorList]);
        let newList = listUser;
        newList[index].r = Math.floor(Math.random() * Math.floor(255));
        newList[index].g = Math.floor(Math.random() * Math.floor(255));
        newList[index].b = Math.floor(Math.random() * Math.floor(255));
        setListUser([...newList]);
    };

    const updateValue = (index) => {
        currentUpdateIndex = index;
        setName(listUser[index].name);
        setAge(listUser[index].age);
    }
    //cancel update
    const cancelUpdate = () => {

    }
    //subition update
    const submitedUpdate = (index) => {
        console.log('index:' + index + 'name:' + name + ' age:' + age);
        let newList = listUser;
        //update at index
        newList[index] = { name, age };
        //
    
        currentUpdateIndex = null;
        console.log('i:'+currentUpdateIndex);
        setListUser([...newList]);

    }
    //bai tap:
    /*
    tao nut update
    */
    //render item

    const renderItem = (item, index) => {
        let obj = <li key={index}
            //style = {{color:listColor[index]}}
            style={{ color: `rgb(${item.r},${item.g},${item.b})` }}
        >This is {item.name} age is {item.age}
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => changeColor(index)}>Color</button>
            <button onClick={() => updateValue(index)}>Update</button>
        </li>
        return obj;
    }
    const renderUpdateButton = () => {
        console.log('currentyyy:'+currentUpdateIndex);
        if(currentUpdateIndex!=null)
        return <span><button onClick={() => submitedUpdate(currentUpdateIndex)}>Update</button>
            <button onClick={() => cancelUpdate()}>Cancel</button>
        </span>
        return <button onClick={onSubmit}>Submit</button>
    }
    return (
        <div className="container">
            Hello {name} Age is {age};
            <input type="text" value={name}  onChange={changeName}></input>
            <input type="text" value={age}  onChange={changeAge}></input>
            {renderUpdateButton()}

            {/* <button onClick={goAbout}>About</button> */}
            {/* <div>
                <button onClick={onSubmit}>Submit</button>
            </div> */}
            {/* <div>Cach 1</div>
            <ul>
                {console.log('len:' + listUser.length)}
                {listUser.map((item, index) =>
                    //retur luon, khong dung ngoac {}
                    <li key={index}>Người thứ {index + 1}, có tên: {item.name} tuổi: {item.age}</li>
                )}
            </ul> */}
            <div>Cach 2</div>
            <ul>
                {listUser.map(renderItem)}
            </ul>

        </div>
    )
}
