import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { addWorker, updateWorker } from '../../actions/workerActions';
import './profile.scss';

const RegistrationModal = ({
  isToggled,
  setToggle,
  formControls,
  changeInfo,
  modalType,
  children,
}) => {
  const {
    bio,
    contactEmail,
    website,
    location,
    displayLocation,
    username,
  } = changeInfo;

  const newWorkerExists = useSelector((state) => state.worker.newWorkerExists);
  const dispatch = useDispatch();

  const addApostropheForSQL = (str) => {
    let editedStrArr = [];
    let strArr = str.split('');
    // eslint-disable-next-line
    strArr.map((char) => {
      if (char === "'") {
        editedStrArr.push("''");
      } else {
        editedStrArr.push(char);
      }
    });
    return editedStrArr.join('');
  };

  const onSubmit = async () => {
    const newWorkerInfo = {
      username,
      bio,
      contactEmail,
      website,
      location,
      displayLocation,
    };
    if (newWorkerExists) {
      return;
    } else {
      dispatch(addWorker(newWorkerInfo));
      setToggle(false);
      formControls.setUsername('');
      formControls.setBio('');
      formControls.setContactEmail('');
      formControls.setWebsite('');
      formControls.setLocation('');
      formControls.setDisplayLocation('');
    }
  };

  const onUpdate = () => {
    const updatedWorkerInfo = {
      bio: addApostropheForSQL(bio),
      contactEmail,
      website,
      location,
      displayLocation,
    };
    dispatch(updateWorker(updatedWorkerInfo));
    setToggle(false);
  };

  return (
    <>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: '50px',
              left: '50%',
              transform: 'translate3d(-50%, 0, 0)',
              zIndex: 2,
            }}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 10 }}
              exit={{ y: 30 }}
            >
              {children}
              <div className='registration-form-controls'>
                <button
                  className='form-button'
                  onClick={() => {
                    modalType === 'Update' ? onUpdate() : onSubmit();
                  }}
                >
                  {modalType}
                </button>
                <button
                  className='form-button'
                  onClick={() => {
                    setToggle(false);
                    formControls.setUsername('');
                    formControls.setBio('');
                    formControls.setContactEmail('');
                    formControls.setWebsite('');
                    formControls.setLocation('');
                    formControls.setDisplayLocation('');
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            onClick={() => {
              setToggle(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: '0px',
              left: '0px',
              height: '100vh',
              width: '100vw',
              background: 'rgba(0, 0, 0, 0.94)',
              zIndex: 1,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RegistrationModal;
