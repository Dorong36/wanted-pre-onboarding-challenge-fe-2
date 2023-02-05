/**
 * 할 일 생성 클래스
 */
class Todo {
    /**
     * Todo 클래스 생성자
     * @param {number} 아이디 - 할 일의 고유 아이디
     * @param {string} 내용 - 할 일 내용
     * @param {boolean} 완료여부 - 완료 여부
     * @param {string} 카테고리 - 분류 카테고리
     * @param {string[]} 태그들 - 할 일 태그들, 선택적으로 입력
     */
    constructor(아이디, 내용, 완료여부, 카테고리, 태그들){
        // ...
    }
}

/**
 * Todo로 생성된 객체들이 담길 Object 배열
 */
let 할일들

/**
 * 할 일 ToDo 클래스 활용해 생성하는 함수
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @param {Object[]} 할일들 - 생성된 할 일들이 들어갈 Object 배열
 * @param {number} 아이디 - 생성자에 넣어줄 아이디
 * @param {string} 내용 - 생성자에 넣어줄 내용 (undefined시 생성 불가)
 * @param {boolean} 완료여부 - 생성자에 넣어줄 완료여부
 * @param {string} 카테고리 - 생성자에 넣어줄 카테고리
 * @param {string[]} 태그들 - 생성자에 넣어줄 태그들
 */
function CREATE(할일들, 아이디, 내용, 완료여부, 카테고리, 태그들){
    // ...
}

/**
 * 조회 함수
 * 기본적으로 모든 할 일을 조회할 수 있다
 * 아이디를 입력하면 해당 ID를 기반으로 할 일을 조회할 수 있다
 * @param {Object[]} 할일들 - 할 일들이 모두 담긴 객체 배열
 * @param {number} 아이디 - 특정 할 일을 조회하기 위한 ID
 */
function READ(할일들, 아이디){
    // ...
}

/**
 * 업데이트 함수
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {Object[]} 할일들 - 할 일들이 모두 담긴 객체 배열
 * @param {number} 아이디 - 사용자가 요구하는 특정 할 일을 구분하기 위한 ID
 * @param {string} 항목 - 수정하고자 하는 항목명
 * @param {any} 새값 - 수정하고자 하는 새 값 (항목에 따라서 자료형 변동, 자료형은 Todo 클래스 참고)
 */
function UPDATE(할일들, 아이디, 항목, 새값){
    // ...
}

/**
 * 삭제 함수
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {Object[]} 할일들 - 할 일들이 모두 담긴 객체 배열
 * @param {boolean} 모두제거 - 모든 할 일 제거 여부
 * @param {number} 아이디 - 제거하고 싶은 할 일의 ID
 * @param {boolean} 태그모두제거 - 특정 ID 할 일의 태그 모두 제거 여부
 * @param {string} 태그 - 특정 ID 할 일의 태그 중 제거하고 싶은 태그
 */
function DELETE(할일들, 모두제거, 아이디, 태그모두제거, 태그){
    // ...
}