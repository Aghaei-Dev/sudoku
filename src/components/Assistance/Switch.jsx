import styled from '@emotion/styled'
import { HomeOutlinedIcon } from '../../assets/icons'
import { useGlobalContext } from '../../context'
export default function Switch() {
  const { togglePen, isFastPenON } = useGlobalContext()

  return (
    <Wrapper className='switch' isFastPenON={isFastPenON}>
      <input
        checked={isFastPenON}
        onChange={togglePen}
        className='react-switch-checkbox '
        id={`react-switch-new`}
        type='checkbox'
      />
      <label className='react-switch-label' htmlFor={`react-switch-new`}>
        <span className='react-switch-button'>
          <HomeOutlinedIcon
            sx={{
              padding: '.3rem',
              color: `${isFastPenON ? 'var(--bg-p-500)' : 'var(--text-500)'}`,
            }}
          />
        </span>
      </label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  * {
    cursor: pointer;
  }
  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 50px;
    height: 25px;
    background: var(--bg-p-500);
    background: ${({ isFastPenON }) =>
      isFastPenON ? 'var(--bg-p-500)' : 'var(--text-200)'};
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  .react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22.5px;
    height: 22.5px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    display: grid;
    place-items: center;
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 30px;
  }
`
