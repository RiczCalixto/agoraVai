import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#122a4f',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  text-align: center;
  justify-content: center;
  background: #122a4f;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  border-radius: 4px;
  padding: 0 36px;
  background: #122a4f;
  align-items: center;
  justify-content: center;
  height: 36px;
`;

export const ProfileDeleteButton = styled(RectButton)`
  margin-top: 10px;
  border-radius: 4px;
  padding: 0 36px;
  background: #f1c;
  align-items: center;
  justify-content: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
