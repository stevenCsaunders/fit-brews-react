import React, { useState } from 'react'
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Modal,
	ModalHeader,
	Col,
	ModalBody,
} from 'reactstrap'

const SearchModal = (props) => {
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)
	const handleSubmit = () => console.log("You're Searching Now")
	const closeBtn = (
		<Button className="close" onClick={toggle}>
			&times;
		</Button>
	)

	return (
		<>
      <Button color="light" className="w-100" outline onClick={toggle}>
				<i className="fa fa-search"></i>
			</Button>
			<Modal isOpen={modal} toggle={toggle} size="sm">
				<ModalHeader toggle={toggle} close={closeBtn}>
					<ModalBody>
						<Form>
							<FormGroup className="d-flex flex-column align-items-center" >
									<Input
										type="text"
										name="search"
										id="searchForm"
										placeholder="Search drinks"
									/>
                  <Label for="searchForm" className="mt-2 w-100" >
									<Button color="dark" onClick={handleSubmit} className="w-100" >
										<i className="fa fa-search">
											<span className="pl-2 search-btn-text">Search</span>
										</i>
									</Button>
								</Label>
							</FormGroup>
						</Form>
					</ModalBody>
				</ModalHeader>
			</Modal>
    </>
  )
}

export default SearchModal
