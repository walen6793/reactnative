import React ,{useState}from 'react'
import { Text ,TextInput,View,Button} from 'react-native';
type CatProps = {
    name : string
    ;
};
const getFullName = (
    firstName : string,
    secondName : string,
    thirdName : string,
) => {
    return firstName + '' + secondName + '' + thirdName;
};
const Cafe = (props : CatProps) => {
    const [isHungry,setIshungry] = useState(true);
    return(
        <View>
            <Text>
                Hello ,I {props.name},หิวหรือไม่ {isHungry ? 'หิว':'ไม่หิว'}!
            </Text>
            <Button onPress={() => {
                setIshungry(false);
            }}
            disabled={!isHungry}
            title={isHungry ? 'Give me':'THank' }
            />
        </View>
    )
}

const Cat = () => {
    
  return (  
    <View>
        <Text>
            Hello walen
        </Text>
        <Cafe name = "Walen"/>
        <Cafe name = "len"/>
        <Cafe name = "aa"/>
        {/* <Text>
        Walen{getFullName('walen','lenwa','wa')}
        </Text>
        <TextInput style ={{
            height:100,
            borderColor:'green',
            borderWidth:20,
        }} defaultValue="โปรดกรอกชื่อ"
            
        /> */}
    </View>
  )
}

export default Cat