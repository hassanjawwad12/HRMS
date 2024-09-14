import React, { useState, Fragment, useEffect } from "react";
import Page from "../components/Page.jsx";
import { Divider, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import MemberModal from "../components/MemberModal.jsx";
import BlueButton from "../components/BlueButton.jsx";
import ModalContainer from "../components/ModalContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setMembers } from "../slices/membersSlice.js";
import Table from "../components/Table.jsx";
import TableRow from "../components/TableRow.jsx";
import { useNavigate } from "react-router-dom";
import { getMembers } from "../integeration/Members.js";

const Members = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const members = useSelector((state) => state.members.members);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMembersList = async () => {
      setLoading(true);
      //if(members?.length > 0) return setLoading(false);
      const memberList = await getMembers();
      dispatch(setMembers(memberList));
      setLoading(false);
    };

    getMembersList();
  }, []);

  /*
   const head = ['Name', 'Email', 'Projects Assigned', 'Details'];
   const rows = members?.map((member) => ({
    id: member.id,
    record: [member.name, member.email, member.assigned_projects?.length],
  }));

     */

  return (
    <>
      {showModal ? (
        <ModalContainer setShowModal={setShowModal}>
          <MemberModal setShowModal={setShowModal} />
        </ModalContainer>
      ) : (
        <></>
      )}
      <>
        {!loading ? (
          <>
            <HStack
              w={["98%", "95%", "90%", "90%", "90%"]}
              justifyContent={"flex-end"}
              paddingY={5}
              fontFamily={"Lexend"}
            >
              <BlueButton
                btnText={"+ Add Members"}
                onClick={() => {
                  setShowModal(true);
                }}
              />
            </HStack>
            <Table head={["Name", "Email", "Projects Assigned", "Details"]}>
              {members?.map((member, index) => {
                return (
                  <Fragment key={member.companyEmail}>
                    <TableRow
                      onView={() => navigate(`/pms/members/${member?.id}`)}
                      record={[
                        member?.name,
                        member?.email,
                        member?.assigned_projects?.length,
                      ]}
                    />
                    {index !== members?.length - 1 ? (
                      <Divider w={["98%", "95%", "90%", "85%", "85%"]} />
                    ) : (
                      ""
                    )}
                  </Fragment>
                );
              })}
            </Table>
          </>
        ) : (
          <VStack w={"100%"} h={"100%"} justifyContent={"center"}>
            <Spinner size={"2xl"} color={"white"} w={"10%"} h={"10%"} />
          </VStack>
        )}
      </>
    </>
  );
};

export default Members;

/*

  <TableComponent head={head} rows={rows} />;
 */
