export type Name = string;

//타입 중복을 막기위해 오브젝트 안에 타입을 숨긴것이다.
namespace 네임스페이스 {
  export type Name = string | number;
}
// 네임스페이스.Name으로 사용한다.
